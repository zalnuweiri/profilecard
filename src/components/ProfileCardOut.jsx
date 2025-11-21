import ProfileCard2 from "./ProfileCard2";

export default function ProfileCard2Out() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#0b0b1a]">
            <ProfileCard2
                avatarUrl="/reactbits/avatar.png"
                miniAvatarUrl="/reactbits/avatar.png"
                iconUrl="/reactbits/code.svg"
                grainUrl="/reactbits/grain.png"
                name="Javi A. Torres"
                title="Software Engineer"
                handle="javicodes"
            />
        </div>
    );
}
