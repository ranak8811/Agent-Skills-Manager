import { SKILLS } from "../SKILLS";

type SkillPageProps = {
    params: { identifier: string };
};

export default async function SkillPage({ params }: SkillPageProps) {
    const { identifier } = await params;

    const skill = SKILLS.find((skill) => skill.id === Number(identifier));
    return (
        <div>
            {
                skill ? (
                    <>
                        <h1>Skill: {skill?.name}</h1>
                        <p>Description: {skill?.description}</p>
                        <p>Category: {skill?.category}</p>
                        <p>Created At: {skill?.createdAt}</p>
                        <p>Updated At: {skill?.updatedAt}</p>
                    </>
                ) : (
                    <h1>Skill not found</h1>
                )
            }
        </div>
    )
}