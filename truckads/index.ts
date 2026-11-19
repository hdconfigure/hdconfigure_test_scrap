//Copyright (C) 2026 by Theron Kauk and John Morris Beck <HD.Configure.direct@gmail.com> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIE WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILIT AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
import path from 'path';
import os from 'os';
import { pathToFileURL } from 'url';
(async () => {
    const configPath = path.join(
	os.homedir(),
	'.config',
	'hdconfigure',
	'tools',
	'git',
	'hdconfigure',
	'hdconfigure_webapps',
	'hdconfigure_webapps_build_page.ts'
    );
    const configUrl = pathToFileURL(configPath).href;
    const hdui = await import(configUrl);
    const result = hdui.generate_html_page(












	     "/style.css",
        "HDConfigure",
        "./menu/",
        "HD Configure",
        " ",







	hdui.subheader("Advertise On A Truck") +
	    hdui.image("/assets/truckday.png") +
	    hdui.subheader("1-(401)-400-2279") +
	    hdui.subheader("HD.Configure.Direct@gmail.com") +
	    hdui.text(
		"Put your advertisement on a moving truck across america, or register your truck for adspace and get paid. Why would you pay for an advertisement in just one place that doesnt move? Why would you drive truck and waste extra money you could be making?") +
	    hdui.image("/assets/truckback.jpg") +
			    
	    hdui.image("/assets/trucknight.png") +
	    hdui.text("If you want to advertise almost anything your advertisements can reach across the nation by putting them on longhaul trucks. For trucking companies and owner operators you are wasting precious avertisement revinue that you could be making with us. Register today and sign up to be served an advertising partner. For trucking companies and owners operators it is free to sign up.") + `


<center>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevLIcajLnalSh20vIcnGZ2dDFG4Ue2tJ0UCPxEjrYCR0SUiQ/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Loading.</iframe></center>



`


    );














    console.log(result);
})().catch(console.error);

