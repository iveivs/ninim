import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react"

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
        setContentType(type);
    }
    return (
        <section>
            <h3>Чем мы отличаемся от других</h3>
            <Button
                isActive={contentType === "way"}
                onClick={() => handleClick("way")}
            >
                Подход
            </Button>
            <Button
                isActive={contentType === "easy"}
                onClick={() => handleClick("easy")}
            >
                Доступность
            </Button>
            <Button
                isActive={contentType === "program"}
                onClick={() => handleClick("program")}
            >
                Концентрация
            </Button>

            {contentType ? (
                <p>{differences[contentType]}</p>
            ) : (
                <p>Нажмите на кнопку</p>
            )}

            {/* variant 2 */}
            {/* { !contentType && <p>{differences[contentType]}</p>} */}
            {/* { contentType && <p>Нажмите на кнопку</p>} */}
        </section>
    );
}
