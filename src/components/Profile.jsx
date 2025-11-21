import React, { useState } from "react";
import ProfileCard from "./ProfileCard.jsx";

function Profile() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen min-w-[1300px] bg-gradient-to-br from-[#0965c0] to-[#c53a94] relative">

            {/* ================= MODAL ================= */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl text-white w-80 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold mb-6 text-center">Contact Me</h2>

                        <div className="flex flex-col gap-4 text-black">
                            <a
                                href="mailto:zhmalnuweiri@gmail.com"
                                className="px-4 py-3 bg-[#db36a4]/15 rounded-lg hover:bg-[#db36a4]/25 transition text-sm"
                            >
                                ✉ Email
                            </a>

                            <a
                                href="https://github.com/zalnuweiri"
                                target="_blank"
                                className="px-4 py-3 bg-[#db36a4]/15 rounded-lg hover:bg-[#db36a4]/25 transition text-sm"
                            >
                                🐙 GitHub
                            </a>

                            <a
                                href="https://linkedin.com/in/zayd-alnuweiri"
                                target="_blank"
                                className="px-4 py-3 bg-[#db36a4]/15 rounded-lg hover:bg-[#db36a4]/25 transition text-sm"
                            >
                                🔗 LinkedIn
                            </a>
                        </div>

                        <button
                            onClick={() => setOpen(false)}
                            className="mt-6 w-full px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition text-sm"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* ================= PROFILE CARD ================= */}
            <ProfileCard onContactClick={() => setOpen(true)} />
        </div>
    );
}

export default Profile;
