import { addDoc, collection, deleteDoc, getDocs, query, where, doc } from "firebase/firestore"
import { db } from "./firebase"
export function addTask(userId, taskName, taskDescription) {
    console.log(userId, taskName, taskDescription);
    
    return new Promise((resolve, reject) => {
        addDoc(collection(db, "tasks"), {
            userId: userId,
            taskName: taskName,
            taskDescription: taskDescription,
            createdAt: new Date()
        }).then((task)=> {
            resolve()
            
        })
    })
}

export function getTasks(userId) {
    return new Promise((resolve, reject) => {
        getDocs(query(collection(db, "tasks"), where("userId", "==", userId))).then((res)=> {
            resolve (
                res.docs.map((data)=> {
                    return {
                        id: data.id, 
                        task: data.data()
                    }
            })
        )
        }).catch((error) => {
            reject(error)
        })
    })
}

export function deleteTask(id) {
    console.log(id);
    
    deleteDoc(doc(db, 'tasks', id))
}