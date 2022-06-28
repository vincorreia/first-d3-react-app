import React, { useRef, useState, useEffect } from 'react';
import D3Chart from './D3Chart';

const ChartWrapper = () => {
	const chartArea = useRef(null)
	const [chart, setChart] = useState(null)
    let count = 0;


    // I've had to add the count let because it was generating 2 of the same charts as the chart state was updating slower than the useEffect hook.

    
	useEffect(() => {
		if (!chart && count === 0) {
			setChart(new D3Chart(chartArea.current))
            count++;
		}
	}, [chart, count])

	return (
		<div ref={chartArea}></div>
	)
}

export default ChartWrapper