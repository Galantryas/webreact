import React from 'react';
import './MySlideShow.scss';



class MySlideShow extends React.Component{
    render(){
        return(

<div class="untitled">
	<div class="untitled__slides">
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>Fantasia</span>
				<span>Login Page</span>
				<a class="button" href="https://hmp.me/ck6x" target="/black">Check Out</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">

				<span>Fantasia</span>
				<span>Home Page</span>
				<a class="button" href="https://hmp.me/ck6y" target="/black">Check Out</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>SmartEco</span>
				<span>Bar Chart</span>
				<a class="button" href="https://hmp.me/ck6z" target="/black">Check Out</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>SmartEco</span>
				<span>Pie Chart</span>
				<a class="button" href="https://hmp.me/ck60" target="/black">Check Out</a>
			</div>
		</div>
	</div>
	<div class="untitled__shutters"></div>
</div>
        )
    }
}
export default MySlideShow;
