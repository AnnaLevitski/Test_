function valid (form) {
            var fail = false;
            var name = form.name.value;
            var email = form.email.value;
            var password = form.password.value;
            var RePassword = form.RePassword.value;
            var state = form.state.value;
            //  var adr_pattern = / [0-9a-z_-]+@[0-9a-z_-]+.[a-z]{2,5}/i;
            var b_pattern = /[0-9a-z_-]+@[0-9a-z_]/i;   // best one for now
            var n_pattern = /[0-9a-z_-]+@[0-9a-z_]+\.[0-9a-z_]/i;  // better then best whooo hooo!


            if (name == "" || name == " ") {
                fail = "U didnt fill in name";
            }
            else if (email == "" || email == " ") {
                fail = "U didnt fill in email";
            }    
            else if (n_pattern.test(email) == false) {
                fail = "Email is wrong";
            } else if (password == "") {
                fail = "U didnt fill in password";
            } else if (RePassword != password) {
                fail = "Passwords dont match";
            }
            // } else if (state == "") {
            //     fail = "Fill in ur gender"; 
            // } 
            if (fail) {
                console.log(fail);
            } else {
                console.log('Ok good! You can be proud of youself');
                setNewInfo()
            }
        }

        const members = [];

        function setNewInfo() {
            let member = new Object();
            const el = document.querySelector('input[name="state"]:checked');
            //const state = el ? el.value : null;
            const state = el ? el.value : "not specified";
            //console.log(state);
            member.name = document.getElementById('name').value;
            member.email = document.getElementById('email').value;
            member.password = document.getElementById('password').value;
            member.gender = state;
            
            members.push(member);
            //console.log(members);

            let div = document.createElement('div');
            for (let i = 0; i< members.length; i++  ) {
                div.innerHTML = `<b>Member </b> ${i + 1}<br> Name : &nbsp ${member.name} <br> Email: &nbsp ${member.email} <br> Password: &nbsp ${member.password}<br> Gender: &nbsp ${member.gender} <br><br>`;
            }
            document.getElementById('form').append(div);
        }