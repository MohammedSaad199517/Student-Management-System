import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Api from '../../api/api'
import '../../style/registerTeacher.css'
import swal from 'sweetalert'
import useRefreshApi from "../../hooks/useRefreshApi";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const RegisterTeacher = () => {
    // const {refresh, setRefresh} =useRefreshApi();
    const userRef = useRef();
    const errRef = useRef();

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
  
    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    const [gender,setGender] = useState('male');
    const [session,setSession] = useState('');
    const [subjects,setSubjects] = useState('')
    
    const [refresh,setRefresh] = useState(false)
    const [errMsg, setErrMsg] = useState('');
    const stageValue=['','','','']
    const [stage ,setStage] = useState(stageValue) 
    const [subjectsSelected,setSubjectsSelected] = useState('');
    const [subjectsSelectedId,setSubjectsSelectedId] = useState('')
//------------------------------------------------------------
    const [teachers,setTeachers] = useState('')
    
    useEffect(()=>{
        const getSubjects =async()=>{
            const res = await Api.getCourses();
            const res2 = await Api.getTeachers();
            setSubjects(res.data);
            setTeachers(res2.data);
        }
        getSubjects()
     
    },[])
    const teacherId = (teachers.length !==0) ? teachers[teachers.length -1].teacherId +1 : 1;
   
    
    useEffect(()=>{
        let subjectsSelected=subjects?subjects.filter((e)=>stage.includes(e.stage)):''
        setSubjectsSelected(subjectsSelected)
       
       
    },[refresh])
    
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [username, pwd, matchPwd])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await Api.register(JSON.stringify(
                { name,email,username, pwd,role:'teacher' ,gender,session}))
            const update =  Api.updateSubject({ teacherId},subjectsSelectedId)

            swal({
                title: `Done`,
                text: "The student has been added",
                icon: "success",
                button: "OK",
            });
            // TODO: remove console.logs before deployment
            // console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
          
            //clear state and controlled inputs
            setUsername('');
            setPwd('');
            setMatchPwd('');
            setEmail('')
            setGender('male');
            setSession('');
            setStage(stageValue);
            setname('')
            // setRefresh(!refresh)
         
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
  

    return (
        <>
            <section className="registerTeacher-holder">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1 >Register Teacher Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="box">
                    {/* -----------------------------------Name-------------------------------------------- */}
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        ref={userRef}
                        onChange={(e)=>{setname(e.target.value)}}
                        value={name}

                        required
                    />
                    {/* -------------------------------------Email------------------------------------------ */}
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        ref={userRef}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        
                        value={email}
                        required
                    />
                    {/* --------------------------------------Username----------------------------------------- */}
                    <label htmlFor="username">
                        Username:
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !username ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>

                    {/* ---------------------------------------Password---------------------------------------- */}
                    <label htmlFor="password">
                        Password:
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>

                    {/* ---------------------------------------confirm password---------------------------------------- */}
                    <label htmlFor="confirm_pwd">
                        Confirm Password:
                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                    </p>
                    </div>
                    <div className="box">
                    {/* --------------------------------------- gender---------------------------------------- */}
                    <div className='gender'>
                        <label htmlFor="gender">
                            Gender :
                            <select onChange={(e)=>{setGender(e.target.value)}} name="gender" className="select-gender" id="">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            </select>
                        </label>
                    </div>
                        {/* --------------------------------------- session---------------------------------------- */}
                        <div className='session'>
                        <label htmlFor="session">
                            Session :
                            <input value={session} onChange={(e)=>{ setSession(e.target.value)}} type="text" />
                        </label> 
                        </div>
                        {/* --------------------------------------- stage---------------------------------------- */}
                        <div className='stage'>
                            <label htmlFor="stage"> stage : </label>
                            <div className="checkbox">
                                <label htmlFor="">one</label>
                                <input  onChange={(e)=>{
                                        stage[0]= e.target.checked ? 'Stage One' :'' ;
                                        setRefresh(!refresh)
                                        setStage(stage)
                                    }} 
                                        type="checkbox"  />
                                <label htmlFor="">two</label>
                                <input onChange={(e)=>{
                                     stage[1]= e.target.checked ? 'Stage Two' :'' ;
                                     setRefresh(!refresh)
                                     setStage(stage)
                                    }} 
                                        value={"two"} type="checkbox"  />
                                <label htmlFor="">three</label>
                                <input onChange={(e)=>{
                                    stage[2]= e.target.checked ? 'Stage Three' :'' ;
                                    setRefresh(!refresh)
                                    setStage(stage)
                                }} 
                                    value={"three"} type="checkbox"  />
                                <label htmlFor="">four</label>
                                <input onChange={(e)=>{
                                     stage[3]= e.target.checked ? 'Stage Four' :'' ;
                                     setRefresh(!refresh)
                                     setStage(stage)
                                    }} 
                                    value={"four"} type="checkbox"  />
                            </div>
                        </div>
                        {/* --------------------------------------- subject---------------------------------------- */}
                        <div className='subject'>
                            <label htmlFor="stage"> subject : </label>
                            <select   onChange={(e)=>{setSubjectsSelectedId(e.target.value)}}>
                                {
                                    subjectsSelected.length !==0 && subjectsSelected.map((e)=>{
                                        return(
                                             <option  value={e.subjectId}>{e.subject}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        {/* ------------------------------------------------------------------------------------------*/}
          
                    <button className="sign-up" disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </div>
                    
                </form>
    
            </section>
          
        </>
    )
}

export default RegisterTeacher

