import './dashboard.scss'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import user from '../../assets/icon/icon.svg'
import activeUser from '../../assets/icon/icon (1).svg'
import loan from '../../assets/icon/loanUser.svg'
import savings from '../../assets/icon/savinguser.svg'
import UserCard from '../../components/UserCard/UserCard'
import UserTable from '../../components/UserTable/UserTable'
import MobileSidebar from '../../components/Sidebar/MobileSidebar'

const Dashboard = () => {

  const data = [
    {
      img: user,
      text: 'USERS',
      numbers: '2,453'
    },
    {
      img: activeUser,
      text: 'ACTIVE USERS',
      numbers: '2,453'
    },
    {
      img: loan,
      text: 'USERS WITH LOANS',
      numbers: '12,453'
    },
    {
      img: savings,
      text: 'USERS WITH SAVINGS',
      numbers: '102,453'
    }
  ]

  return (
    <div>
      <Nav />
      <div className='dashboard'>
        <div className='dashboard-sidebar'>
          <Sidebar />
        </div>

        <div className='dashboard-sidebar-mobile'>
          <MobileSidebar />
        </div>
        <main>
          <h2>Users</h2>
          <div className='userOptions'>
            {data.map((item, index) => (
              <div key={index} className='userOptions-single'>
                <UserCard src={item.img} alt={item.text} text={item.text} numbers={item.numbers} />
              </div>
            ))}
          </div>

          <section className='dashboard-table'>
            <UserTable  />
          </section>
        </main>
      </div>
    </div>
  )
}

export default Dashboard