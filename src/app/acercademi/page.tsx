"use client"

import useWindowWidth from "../hooks/widthHooks";
import Curriculum from "./curriculum";
import CurriculumMobile from "./curriculumMobilie";

export default function AboutMe() {
    const width = useWindowWidth()

    return (
        width >= 750 ? (
            <Curriculum />
        ) : (
            <CurriculumMobile />
        )
    )
}