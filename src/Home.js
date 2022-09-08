import { getJobsPage } from "./axios";
import { useState, useEffect } from "react";
import JobListing from "./JobListing"
import { MDBBtn } from 'mdb-react-ui-kit';
import './App.css'


const Home = () => {
    const [page, setPage] = useState(1)
    const [jobs, setJobs] = useState([])

    // useEffect hakee sivua vaihdettaessa uuden sivun tulokset ja asettaa ne jobs-stateen
    useEffect(() => {
        getJobsPage(page).then(json => setJobs(json))
    }, [page])

    // Jos sivua vaihdettaessa tulokset ovat loppu, renderöi siitä ilmoitus. 
    // Muuten listaa tulokset
    const listings = !jobs.length ? <p>No more results</p> : jobs.map(job => <JobListing key={job.id} job={job} />)

    // Muuttaa tämänhetkisen sivun statea yhdellä
    const nextPage = () => setPage(previous => previous + 1)
    const previousPage = () => setPage(previous => previous - 1)

    return (
        <>
            {listings}
            <nav className="nav">
                <MDBBtn onClick={previousPage} disabled={page === 1} className="btn">Previous</MDBBtn>
                <MDBBtn onClick={nextPage} disabled={!jobs.length} className="btn">Next</MDBBtn>
            </nav>
        </>
    )
}

export default Home