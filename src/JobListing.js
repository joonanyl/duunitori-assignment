import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn,
} from 'mdb-react-ui-kit'
import JobInfo from './Job'
import { useState } from 'react'
import "./App.css"

const JobListing = ({ job }) => {
    const [modal, setModal] = useState(false)

    // Toggle modalin (JobInfon) näyttämiselle ja sulkemiselle
    const toggleShow = () => setModal(!modal)

    // Laskee kuluneet päivät hakemuksen julkaisupäivästä
    const calculateDate = (jobDate) => Math.floor((new Date() - new Date(jobDate)) / (1000 * 60 * 60 * 24)) + " days ago"

    return (
        <div className='listing'>
            <MDBCard alignment='center'>
                <MDBCardHeader>{job.company_name}</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>{job.heading}</MDBCardTitle>
                    <MDBCardText>{job.municipality_name}</MDBCardText>
                    <MDBBtn onClick={toggleShow}>Read more</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>
                    {calculateDate(job.date_posted)}
                </MDBCardFooter>
            </MDBCard>
            <JobInfo modal={modal} setModal={setModal} toggleShow={toggleShow} job={job} />
        </div>
    )
}

export default JobListing