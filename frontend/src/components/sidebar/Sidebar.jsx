import { useState } from "react";
import Conversations from "./Conversations";
import Userprofie from "./Userprofie";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	const [toggelprofile,settoggelprofile]=useState (false);
	return (
		<div className='w-[50%] bg-white border-r border-slate-500 p-4 flex flex-col'>
			{toggelprofile ?<Userprofie  settoggelprofile={settoggelprofile} />:
			<div>
			<SearchInput settoggelprofile={settoggelprofile}  />
			<div className='divider px-3'></div>
			<Conversations />	
			</div>
	}
		</div>
	);
};
export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
