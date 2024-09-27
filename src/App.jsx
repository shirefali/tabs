import { useEffect } from "react";
import { useState } from "react";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);

    const fetchJobs = async () => {
        try {
            const res = await fetch(url);
            const newJobs = await res.json();
            setJobs(newJobs);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (isLoading) {
        return (
            <section className="jobs-center">
                <div className="loading"></div>
            </section>
        );
    }

    return (
        <section className="jobs-center">
            <BtnContainer
                jobs={jobs}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
            />
            <JobInfo jobs={jobs} currentItem={currentItem} />
        </section>
    );
};
export default App;
