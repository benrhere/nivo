import { useMemo } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { arc as d3Arc } from 'd3-shape'
import { degreesToRadians } from '@nivo/core'
import { useOrdinalColorScale } from '@nivo/colors'
import { svgDefaultProps } from './props'
import { ComputedDatum, RadialBarCommonProps, RadialBarDataProps, RadialBarSerie } from './types'

interface RadialBarGroup {
    id: string
    total: number
    data: RadialBarSerie['data']
}

export const useRadialBar = ({
    data,
    startAngle = svgDefaultProps.startAngle,
    endAngle = svgDefaultProps.endAngle,
    width,
    height,
    colors = svgDefaultProps.colors,
    cornerRadius = svgDefaultProps.cornerRadius,
}: {
    data: RadialBarDataProps['data']
    startAngle: RadialBarCommonProps['startAngle']
    endAngle: RadialBarCommonProps['endAngle']
    width: number
    height: number
    colors: RadialBarCommonProps['colors']
    cornerRadius: RadialBarCommonProps['cornerRadius']
}) => {
    const center: [number, number] = [width / 2, height / 2]
    const outerRadius = Math.min(...center)

    const getColor = useOrdinalColorScale<ComputedDatum>(colors, 'category')

    const { serieIds, categories, groups, maxValue } = useMemo(() => {
        const result: {
            serieIds: string[]
            categories: string[]
            groups: RadialBarGroup[]
            maxValue: number
        } = {
            serieIds: [],
            categories: [],
            groups: [],
            maxValue: 0,
        }

        data.forEach(serie => {
            result.serieIds.push(serie.id)

            let groupTotalValue = 0
            serie.data.forEach(datum => {
                if (!result.categories.includes(datum.x)) {
                    result.categories.push(datum.x)
                }
                groupTotalValue += datum.y
            })

            result.groups.push({
                id: serie.id,
                total: groupTotalValue,
                data: serie.data,
            })
        })

        result.maxValue = Math.max(...result.groups.map(group => group.total))

        return result
    }, [data])

    const valueScale = useMemo(
        () => scaleLinear<number, number>().domain([0, maxValue]).range([startAngle, endAngle]),
        [maxValue, startAngle, endAngle]
    )

    const radiusScale = useMemo(
        () =>
            scaleBand()
                .domain(serieIds)
                .range([outerRadius - 100, outerRadius])
                .padding(0.4),
        [serieIds, outerRadius]
    )

    const arcGenerator = useMemo(
        () =>
            d3Arc<ComputedDatum>()
                .startAngle(d => degreesToRadians(d.startAngle))
                .endAngle(d => degreesToRadians(d.endAngle))
                .innerRadius(d => d.innerRadius)
                .outerRadius(d => d.outerRadius)
                .cornerRadius(cornerRadius),
        [cornerRadius]
    )

    const bars = useMemo(() => {
        const innerBars: any[] = []

        groups.forEach(group => {
            let currentValue = 0
            const innerRadius = radiusScale(group.id) as number
            const outerRadius = innerRadius + radiusScale.bandwidth()

            group.data.forEach(datum => {
                const stackedValue = currentValue + datum.y

                const computedDatum: ComputedDatum = {
                    id: `${group.id}.${datum.x}`,
                    data: datum,
                    category: datum.x,
                    value: datum.y,
                    color: '',
                    stackedValue,
                    startAngle: valueScale(currentValue),
                    endAngle: valueScale(stackedValue),
                    innerRadius,
                    outerRadius,
                }

                computedDatum.color = getColor(computedDatum)

                currentValue += datum.y

                innerBars.push(computedDatum)
            })
        })

        return innerBars
    }, [groups, radiusScale, valueScale, getColor])

    return {
        center,
        outerRadius,
        bars,
        arcGenerator,
        radiusScale,
        valueScale,
    }
}
