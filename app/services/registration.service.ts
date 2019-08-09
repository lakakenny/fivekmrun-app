import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { UserRegistration } from "~/models/user-registration.model";
import * as cheerio from "cheerio";

@Injectable()
export class RegistrationService {
    constructor(private http: Http) {
    }

    submitRegistration(userRegistration: UserRegistration) {
        const body = `i_firstname=${encodeURI(userRegistration.firstName)}&i_password=${userRegistration.password}&i_email=${userRegistration.email}&b_day=12&b_month=2&b_year=2012&i_sex=${userRegistration.gender}&i_lastname=${encodeURI(userRegistration.lastName)}&i_password2=${userRegistration.password}&i_email2=${userRegistration.email}&i_bulletin=${userRegistration.mailSubscription}&i_city=721&u_school=&word=${userRegistration.captcha}&agree=yes&submit=%D0%A0%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F&action=submit`;

        console.log("request obj: " + body);

        this.http.post(
            "http://5kmrun.bg/reg_form.php",
            body
        ).subscribe(response => {
                const content = response;

                const options = {
                    normalizeWhitespace: true,
                    xmlMode: true,
                };

                const webPage = cheerio.load(content, options);
                const rows = webPage("div .push_top");
                
                var test = 0;

                if (rows.length > 0) {
                    test = 1;
                    // handle error
                } else {
                    test = 2;
                    // handle success
                }
        });
    }
}