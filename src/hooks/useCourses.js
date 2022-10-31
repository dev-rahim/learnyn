import { useState, useEffect } from 'react'
const useCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/coursesData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return [courses, setCourses]
}

export default useCourses;