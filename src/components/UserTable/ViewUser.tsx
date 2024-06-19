import userMenu from '../../assets/icon/more.svg'
import eye from '../../assets/icon/Group.svg'
import black from '../../assets/icon/delete.svg'
import active from '../../assets/icon/user.svg'
import { Link } from 'react-router-dom'


type PropsType = {
  id: string;
  setActiveDropDown:React.Dispatch<React.SetStateAction<string>>;
  activeDropDown: string;
}

const ViewUser = ({id, activeDropDown, setActiveDropDown}: PropsType) => {


  return (
    <div>
      <img src={userMenu} alt='menu' onClick={(e)=>{e.stopPropagation(); setActiveDropDown(id)}}/>
      {activeDropDown === id && (
                <div className='details'>
                    <Link to={`/user/${id}`}><div className='details-option'>
                        <img src={eye} alt='view details'></img>
                        <span>View Details</span>
                    </div></Link>
                    <div className='details-option'>
                        <img src={black} alt='blacklist'></img>
                        <span>Blacklist User</span>
                    </div>
                    <div className='details-option'>
                        <img src={active} alt='activate'></img>
                        <span>Activate User</span>
                    </div>
                </div>
            )}
    </div>
  )
}

export default ViewUser