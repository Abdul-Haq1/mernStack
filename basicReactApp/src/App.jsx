import { BrowserRouter as Router, Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}


const Content = (props) => {

  const courseDetail = props.part
  console.log(courseDetail)

  return (
    <>
      <p>
        {courseDetail[0].name} {courseDetail[0].exercises}
      </p>

      <p>
        {courseDetail[1].name} {courseDetail[1].exercises}
      </p>

      <p>
        {courseDetail[2].name} {courseDetail[2].exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  const courseDetail = props.part

  return (
    <>
      <p>Number of Exercises {courseDetail[0].exercises + courseDetail[1].exercises + courseDetail[2].exercises}</p>
    </>
  )
}



function App() {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>

      <Header course={course} />

      <Content part={[part1, part2, part3]} />

      <Total part={[part1, part2, part3]} />
    </div>
  )

}

export default App
