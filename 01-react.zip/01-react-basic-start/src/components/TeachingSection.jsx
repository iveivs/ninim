import { ways } from "../data"
import WayToteach from "./WayToteach"

export default function TeachingSection() {
    return (
        <section>
            <h3>Наш подход к обучению</h3>

            <ul>
                {ways.map((way) => (
                    <WayToteach key={way.title} {...way} />
                ))}

                {/* старый вариант */}
                {/* < WayToteach 
            title={ways[0].title}
            description={ways[0].description}
            />
            <WayToteach {...ways[1]}  />
            <WayToteach {...ways[2]}  />
            <WayToteach {...ways[3]}  /> */}
            </ul>
        </section>
    );
}
