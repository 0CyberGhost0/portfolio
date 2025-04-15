
import Image from 'next/image';
export default function LeetCodeGrid() {
    const exampleTheme = {
        light: [
            'rgb(235, 235, 235)',
            'rgba(192, 132, 245, 0.44)',
            'rgba(192, 132, 245, 0.6)',
            'rgba(192, 132, 245, 0.76)',
            'rgba(192, 132, 245, 0.92)',
        ],
        dark: [
            'rgb(235, 235, 235)',
            'rgba(192, 132, 245, 0.44)',
            'rgba(192, 132, 245, 0.6)',
            'rgba(192, 132, 245, 0.76)',
            'rgba(192, 132, 245, 0.92)',
        ],
    }

    return (

        <img
            src="https://leetcard.jacoblin.cool/Ved07?ext=heatmap"
            alt="LeetCode Stats"
            width="500"
            height="300"
        />
    )
}