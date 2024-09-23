"use client"
import { useCurrentUser } from '@/hooks/user';
import SigninWIthGoogle from '@/components/SigninWithGoogle';

const InfoSideBar = () => {
    const { user } = useCurrentUser()
    
    return (
        <div className="col-span-3 ">
            {!user && <div className="border p-5 bg-slate-700 rounded-lg">
                <h1 className="text-2xl my-2">New to Twitter ?</h1>
                <SigninWIthGoogle />
            </div>}
        </div>
    )
}

export default InfoSideBar