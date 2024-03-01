// components/Profile.tsx
import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

const Profile: React.FC = () => {
	const user = useRecoilValue(userState);

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl mb-4">Profile</h2>
			{user && (
				<div>
					<p>ID: {user.id}</p>
					<p>Username: {user.username}</p>
				</div>
			)}
		</div>
	);
};

export default Profile;
