import React from 'react';

export default function Portfolio() {
    return (
        <div className="bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center border-b-2 border-black pb-2">THE TECH TRIBUNE</h2>
            <p className="text-center italic mb-4">Volume 1, Issue 1 - September 13, 2024</p>

            <section className="mb-8">
                <h3 className="text-2xl font-bold mb-4">BREAKING NEWS: Computer Science Prodigy Emerges!</h3>
                <p className="mb-4">In an exciting development for the tech world, MEFTAH Ahmed Reda has burst onto the scene with a diverse skill set and impressive portfolio. Currently pursuing a Computer Science Engineering degree at ENSA Marrakech, Ahmed Reda is already making waves with his innovative projects and technical prowess.</p>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">Education Spotlight</h3>
                <ul className="list-disc pl-5">
                    <li>Baccalaureat of Mathematical Sciences (2019) - Technical Highschool Anoual</li>
                    <li>Integrated Engineering Program in Computer Science Engineering (2019 - 2025 Expected) - ENSA Marrakech</li>
                </ul>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">Project Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border p-4">
                        <h4 className="font-bold">I need this</h4>
                        <p>A revolutionary platform connecting buyers and sellers, streamlining product requests and offers.</p>
                    </div>
                    <div className="border p-4">
                        <h4 className="font-bold">JIBI</h4>
                        <p>Cutting-edge banking transaction management system for the modern era.</p>
                    </div>
                    <div className="border p-4">
                        <h4 className="font-bold">Online Music Stems Marketplace</h4>
                        <p>Innovative platform for sharing, listening to, and purchasing music stems.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">Technical Arsenal</h3>
                <p><strong>Languages:</strong> C/C++, Java, Javascript, Typescript, Python</p>
                <p><strong>Frameworks:</strong> ReactJs, AngularJs, Spring Boot, TailwindCSS</p>
                <p><strong>Databases:</strong> MySQL, PostgreSQL, Oracle Database Administration</p>
            </section>

            <section>
                <h3 className="text-xl font-bold mb-2">Contact the Rising Star</h3>
                <p>Phone: +212 707-641333</p>
                <p>Email: meftahahmedreda02@gmail.com</p>
            </section>
        </div>
    );
}