import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";
// import {resume} from "react-dom/server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumeind" },
    { name: "description", content: "Smart Feedback for Your dream job!" },
  ];
}

export default function Home() {
    const { isLoading, auth, fs, kv } = usePuterStore();
    // const location = useLocation();
    const navigate = useNavigate();
    const [resumeUrl, setResumeUrl] = useState('');
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [loadingResumes, setLoadingResumes] = useState(false);


    useEffect(() => {
        if (!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated]); // <-- missing bracket fixed

    useEffect(() => {
        const loadResumes = async () =>{
            setLoadingResumes(true);
            const resumes = (await kv.list('resume:*', true)) as KVItem[];
            const parsedResumes = resumes?.map((resume) => (JSON.parse(resume.value) as Resume));
            console.log("parsedResumes", parsedResumes);

            setResumes(parsedResumes || []);
            setLoadingResumes(false);
        }
        loadResumes();
    }, []);

    // useEffect(() => {
    //     const loadResume = async ()=>{
    //         const blob = await fs.read(resume.imagePath);
    //         if(!blob) return;
    //         let url = URL.createObjectURL(blob);
    //         setResumeUrl(url);
    //
    //
    //     }
    //     loadResume();
    // }, [resume.imagePath]);

    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

    <section className="main-section">
        <div className="page-heading py-16">
            <h1>Track Your Applications & Resume Ratings</h1>
            {
                !loadingResumes && resumes.length == 0 ?(
                    <h2>No Resumes Found. Upload your first resume to get feedback.</h2>
                ):(
                    <h2>Review your submissions and check AI-powered feedback.</h2>
                )
            }
            {/*<h2>Review your submissions and check AI-Powered feedback.</h2>*/}
        </div>
        {loadingResumes && (
            <div className="flex flex-col items-center justify-center">
                <img src="/images/resume-scan-2.gif" className="w-[200px]"/>
            </div>
        )}
        {!loadingResumes && resumes.length > 0 && (
        <div className="resumes-section">
            {resumes.map(resume => (
                <ResumeCard key={resume.id} resume = {resume} />
            ))}
        </div>
    )}
        {!loadingResumes && resumes.length ==0 && (
            <div className="flex flex-col items-center justify-center mt-10 gap-4">
                <Link to="/upload" className="primary-button w-fit text-xl font-semibold">Upload Resume</Link>
            </div>
            )}
    </section>



  </main>;
}
