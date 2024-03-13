import { Menu } from "../../components/Menu";

const SimonScreen = () => {
  	return (
    	<div className="h-screen container">
      		<div className="flex flex-col justify-center items-center gap-10 h-full">            
            	<h1 className="font-roboto font-black text-gray-100 text-3xl uppercase"> 
                	<span className="border-b-4 border-b-amber-400">play <span className="text-base"> with </span> simon</span>
                	<br/>
                	<p className="flex justify-between text-sm text-center mt-1 py-1 px-1">
						<span>C</span>
						<span>H</span>
						<span>A</span>
						<span>L</span>
						<span>L</span>
						<span>E</span>
						<span>N</span>
						<span>G</span>
						<span>E</span>
					</p>
            	</h1>
            
	            <Menu />        
    	    </div>
    	</div> 
  	)
}

export default SimonScreen;