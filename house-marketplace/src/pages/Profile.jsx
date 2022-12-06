import { useState, useEffect } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { db } from '../firebase.config'
import { updateDoc, doc } from 'firebase/firestore'
import {toast} from 'react-toastify'




function Profile() {
    const auth = getAuth()
    const [ changeDetails, setChangeDetails ] = useState(false)
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
      })

    const { name, email } = formData
   
    const navigate = useNavigate()

    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }
    
    const onSubmit = async () => {
        try {
            if (auth.currentUser.displayName !== name) {
                await updateProfile(auth.currentUser, { displayName: name})

                const userRef = doc(db, 'users', auth.currentUser.uid)
                await updateDoc(userRef, {
                    name
                })
            }


        } catch (error) {
            toast.error('Could not update profile details')
        }
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }))
      }
    



    return <div className='profile'>
            <header className="profileHeader">
                <p className='pageHeader'>My Profile</p>
                <button type="button"className="logOut" onClick={onLogout}>Logout</button>
            </header> 
           <main className=''>
                <div className="profileDetailsHeader">
                    <p className='profileDetailsText'> Personal Details </p>
                    <p className='changePersonalDetails' onClick={() => {
                            changeDetails && onSubmit()
                            setChangeDetails((prevState) => !prevState)}}> 
                            {changeDetails ? 'done' : 'change'}
                    </p>
                </div>
           </main>

           <div className="profileCard">
                <form>
                    <input type='text' id='name' className={!changeDetails ? 'profileName' : 'profileNameActive'} disabled={!changeDetails} value={name} onChange={onChange}></input>
                    <input type='text' id='email' className={!changeDetails ? 'profileName' : 'profileEmailActive'} disabled={!changeDetails} value={email} onChange={onChange}></input>
                </form>
           </div>
        </div>
}

export default Profile