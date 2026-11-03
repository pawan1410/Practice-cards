import Profile from './Profile';
function Info() {

    const users = [
        {
            id: 1,
            name: "Pawan",
            age: 22,
            city: "Bangalore",
            marks: 90
        },
        {
            id: 2,
            name: "Raja",
            age: 33,
            city: "Delhi",
            marks: 85
        },
        {
            id: 3,
            name: "Rahul",
            age: 24,
            city: "Noida",
            marks: 80
        },
        {
            id: 4,
            name: "Ramesh",
            age: 29,
            city: "Mumbai",
            marks: 75
        }
    ]
  return (
    <Profile users={users}></Profile>

  )

  }

export default Info;