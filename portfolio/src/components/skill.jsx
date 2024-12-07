import React from "react";

const skill = () => {
    return (
        <section class="max-w-4xl mx-auto px-7 lg:px-0">
        <h2
            class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100"
        >
            My Projects
        </h2>
        <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
            Here are some of my recent projects. I'm always working on something new, so
            check back often!
        </p>
        <div
            class="grid items-stretch w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-7"
        >
        </div>

        <div class="flex items-center justify-center w-full py-5">
            <Button text="View All My Projects" link="/projects" />
        </div>
        </section>

    );
};

export default skill;