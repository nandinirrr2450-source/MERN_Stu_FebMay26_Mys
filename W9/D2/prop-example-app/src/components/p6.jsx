//compostion
//import { React } from "react";

function DashedboardLayout({children}){
    return <div className="layout">{children}</div>
}

function AccountSidebar({children}){
    return <aside className="sidebar">{children}</aside>
}

function UserInfoPanel({children}){
    return <aside className="user-panel">{children}</aside>
}

function ProfileAvatar({ user }){
    return (user.name)
    //return <img src={`/${user.name}.png`} alt={user.name} />
}

export function CompositionDemo(){
    const user={name: 'Nandini'}
    return (
        <div>
        <h3>Composition Solution</h3>
        <DashedboardLayout>
            <AccountSidebar>
                <UserInfoPanel>
                    <ProfileAvatar user={user} />
                </UserInfoPanel>
            </AccountSidebar>
        </DashedboardLayout>
        </div>
    )
}