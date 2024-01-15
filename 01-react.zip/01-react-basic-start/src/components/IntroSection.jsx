import React from "react";
export default function IntroSection() {
    return (
        <section>
            <h1 className="centered">React University</h1>
            <h3 className="centered" style={{ color: "#666" }}>
                Университет frontend-разработки, который насыщает IT-сферу
                квалифицированными программистами
            </h3>
        </section>
    );
}

// другой вариант написания(с точки зрения работы jsx)
// export default function IntroSection() {
//     return React.createElement("section", null, [
//         React.createElement(
//             "h1",
//             { className: "centered", key: 1 },
//             "React University"
//         ),
//         React.createElement(
//             "h3",
//             { className: "centered", style: {color: '#666', key: 2 } },
//             "Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами"
//         ),
//     ]);
// }