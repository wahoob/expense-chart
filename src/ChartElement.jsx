import React, { useRef, useState } from 'react'
import weekDays from "./data.json"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
} from "chart.js"
import { Bar, getElementAtEvent } from "react-chartjs-2"
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
)

const ChartElement = () => {
    const [clickedBarIndex, setClickedBarIndex] = useState(null)
    const [isHovered, setIsHovered] = useState(false)
    const data = {
        labels: weekDays.map(weekDay => weekDay.day),
        datasets: [{
            data: weekDays.map(weekDay => weekDay.amount),
            backgroundColor: 'hsl(10, 79%, 65%)',
            hoverBackgroundColor: (context) => {
                const index = context.dataIndex
                return index === clickedBarIndex ? 'hsl(186, 34%, 80%)' : 'hsl(10, 79%, 75%)'
            },
            borderRadius: 5,
        }
        ]
    }
    const options = {
        scales: {
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 13,
                        family: '"DM Sans", sans-serif'
                    }
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                },
                border: {
                    display: false
                }
            }
        },
        plugins: {
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    label: (context) => {
                        const value = context.dataset.data[context.dataIndex]
                        return `$${value}`
                    },
                    title: () => '',
                },
                bodyFont: {
                    size: 13,
                    family: '"DM Sans", sans-serif'
                }
            },
        }
    }
    const chartRef = useRef(null)
    const handleClick = (e) => {
        if (getElementAtEvent(chartRef.current, e).length > 0) {
            if (isHovered) {
                setClickedBarIndex(getElementAtEvent(chartRef.current, e)[0].index)
            } else {
            }
        }
    }
    const handleMouseOver = (e) => {
        if (getElementAtEvent(chartRef.current, e).length > 0) {
            e.target.style.cursor = 'pointer'
            setIsHovered(true)
        } else {
            e.target.style.cursor = 'default'
            setIsHovered(false)
            setClickedBarIndex(null)
        }
    }
    return (
        <Bar id='chart' data={data} options={options} ref={chartRef} onClick={handleClick} onMouseMove={handleMouseOver} />
    )
}

export default ChartElement
