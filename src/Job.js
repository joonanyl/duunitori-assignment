import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit'

const JobInfo = ({ toggleShow, modal, setModal, job }) => {
    return (
        <>
            <MDBModal show={modal} setShow={setModal} tabIndex='-1'>
                <MDBModalDialog size='lg' scrollable>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>{job.heading + ", " + job.municipality_name}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <h3>{job.company_name}</h3>
                            <p>{job.descr}</p>
                            <p><strong>
                                {/* Jos minimipalkka on sama kuin maksimi, näytä vain 1 palkka. 
                                    Muuten näytä koko palkkahaarukka */}
                                Palkka: {job.salary.low_value === job.salary.high_value
                                    ? job.salary.low_value + "€/h"
                                    : job.salary.low_value + "-" + job.salary.high_value + "€/h"}
                            </strong></p>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}

export default JobInfo