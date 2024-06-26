import {List} from "@/app/(main)/courses/list";
import {getCourses} from "@/db/queries";

const CoursesPage = async () => {
    const data = await getCourses();

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                Language Course
            </h1>
            <List courses={data} activeCourseId={1}/>
        </div>
    );
};

export default CoursesPage;
