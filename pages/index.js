import "@pathfinder-ide/react/dist/style.css"
import dynamic from "next/dynamic"

const Pathfinder = dynamic(
	() => import("@pathfinder-ide/react").then((mod) => mod.Pathfinder),
	{ ssr: false }
)

export default function Home() {
	return (
		<div style={{ height: "100vh", padding: 200, backgroundColor: "#111" }}>
			<Pathfinder />
		</div>
	)
}
