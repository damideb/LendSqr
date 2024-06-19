import { ActiveUserDetails } from '../../../types';
import './details.scss'

type Props = {
    userDetailsBox: ActiveUserDetails;
}

const Details = ({userDetailsBox}: Props) => {
  return (
    <div className='fullDetails'>
        <h3>Personal Information</h3>
        <div className='personalDetails up'>
            <div className='personalDetails-single'>
                <div>
                    <h4>FULL NAME</h4>
                    <p>{userDetailsBox.profile.firstName} {userDetailsBox.profile.lastName} </p>
                </div>
                <div>
                    <h4>MARITAL STATUS</h4>
                    <p>Single</p>
                </div>
            </div>
            
            <div className='personalDetails-single'>
                <div>
                    <h4>PHONE NUMBER</h4>
                    <p>{userDetailsBox.profile.phoneNumber}</p>
                </div>
                <div>
                    <h4>CHILDREN</h4>
                    <p>None</p>
                </div>
            </div>

            <div className='personalDetails-single'>
                <div>
                    <h4>EMAIL ADDRESS</h4>
                    <p className='break'>{userDetailsBox.email}</p>
                </div>
                <div>
                    <h4>TYPE OF RESIDENCE</h4>
                    <p>Parent’s Apartment</p>
                </div>
            </div>

            <div className='personalDetails-single'>
         
            <div>
                <h4>GENDER</h4>
                <p>{userDetailsBox.profile.gender}</p>
            </div>
            </div>
        </div>
        <hr />

        <h3>Education and Employment</h3>
        <div className='personalDetails up'>
            <div className='personalDetails-single'>
                <div>
                    <h4>LEVEL OF EDUCATION</h4>
                    <p>{userDetailsBox.education.level}</p>
                </div>
                <div>
                    <h4>OFFICE EMAIL</h4>
                    <p>{userDetailsBox.education.officeEmail}</p>
                </div>
            </div>

            <div className='personalDetails-single'>
                <div>
                    <h4>EMPLOYMENT STATUS</h4>
                    <p>{userDetailsBox.education.employmentStatus}</p>
                </div>
                <div>
                    <h4>MONTHLY INCOME</h4>
                    <p>₦{userDetailsBox.education.monthlyIncome[0]}- ₦{userDetailsBox.education.monthlyIncome[1]}</p>
                </div>
            </div>

            <div className='personalDetails-single'>
                <div>
                    <h4>SECTOR OF EMPLOYMENT</h4>
                    <p>{userDetailsBox.education.sector}</p>
                </div>
                <div>
                    <h4>LOAN REPAYMENT</h4>
                    <p>₦{userDetailsBox.education.loanRepayment}</p>
                </div>
            </div>
            <div>
                <h4>DURATION OF EMPLOYMENT</h4>
                <p>{userDetailsBox.education.duration}</p>
            </div>
        </div>
        <hr />

        <h3>Socials</h3>
        <div className='personalDetails up'>
            <div>
                <h4>TWITTER</h4>
                <p>{userDetailsBox.socials.twitter}</p>
            </div>
            <div>
                <h4>FACEBOOK</h4>
                <p>{userDetailsBox.socials.twitter}</p>
            </div>
            <div>
                <h4>INSTAGRAM</h4>
                <p>{userDetailsBox.socials.twitter}</p>
            </div>
        </div>
        <hr />

        <h3>Guarantor</h3>
        <div className='personalDetails up'>
            <div>
                <h4>FULL NAME</h4>
                <p>{userDetailsBox.guarantor.firstName} {userDetailsBox.guarantor.lastName}</p>
            </div>
            <div>
                <h4>PHONE NUMBER</h4>
                <p>{userDetailsBox.guarantor.phoneNumber}</p>
            </div>
            <div>
                <h4>EMAIL ADDRESS</h4>
                <p>{userDetailsBox.guarantor.address}</p>
            </div>
            <div>
                <h4>RELATIONSHIP</h4>
                <p>Sister</p>
            </div>
        </div>
        <hr />
        
        <div className='personalDetails up'>
            <div>
                <h4>FULL NAME</h4>
                <p>{userDetailsBox.guarantor.firstName} {userDetailsBox.guarantor.lastName}</p>
            </div>
            <div>
                <h4>PHONE NUMBER</h4>
                <p>{userDetailsBox.guarantor.phoneNumber}</p>
            </div>
            <div>
                <h4>EMAIL ADDRESS</h4>
                <p>{userDetailsBox.guarantor.address}</p>
            </div>
            <div>
                <h4>RELATIONSHIP</h4>
                <p>Sister</p>
            </div>
        </div>
    </div>
  )
}

export default Details