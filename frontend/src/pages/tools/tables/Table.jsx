import { useParams } from "react-router-dom"

export default function Table() {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <h1>Table</h1>
      <p>Table page content</p>
    </div>
  )
}