# post_test
* [version](#version) 

* [see structrue](#structrue)
* [See latst version](#v_154)
```bash
#install 
git clone  https:github.com/agsalem/post_test
cd post_test
run
bun install
or 
pnpm install 
or
npm install
```
## include
```bash 
# structre is strong for edit in futrue
# And secure
```
## structrue
```bash
post_test/__
            |
            |____change&structrue/
               |         |__api.tex
               |         |__admin.tex
               |         |__change.tex
               |         |__controller.tex
               |         |__Dawnload.tex
               |         |__test.tex
               |         |__test.tex
            __.env       
            -src/__           
                  |___index.js 
                  |
                  |Connect/
                  |	|__connection.js  
                  |    
                  |plugin/
                  |   |__db.js  
                  |   |__ joi.js 
                  |   |__auth.js
                  |   |__multer.js 
                  |   |__limit.js 
                  |   
                  |routs/
                  |     |__user.js
                  |     |__post.js
                  |     |__admin.js
                  |
                  |types/
                  |     |
                  |     |__error.js
                  |     |__n&p.js
                  |     |__p&c.js
                  |
                  |controller/  
                        |     
                        |admin/
                        |   |__admin.js 
                        |   |__see.js
                        | 
                        |userpage
                        |   |___page.js
                        |   |__searchPost.js
                        |   |__searchUser.js
                        |   
                        |users/
                        |   |
                        |   |__create.js
                        |   |
                        |   |__delete.js    
                        |   |
                        |   |__update.js
                        |   |
                        |   |__login.js
                        |   
                        |posts/    
                              |__create.js
                              |
                              |__delete.js
                              |
                              |__update.js
                              |
                              |__post.js


```
## version
## V_1.0.0
```bash
{
  #  انشاء هيكل قوي وسهل التعديل 
  # ثانيا تعريف الملفات الاساسية 
  ## الملفات الي تم تعريفها في الاصدار دة 
  src/index.js
  src/plugin/db.js
  src/connect/connection.js
  test/change{ملفات الاربعة}
}

```
## provided by Ahmed Gamal Salem @2026
# نسخة V_1.2.2
## التغيرات الي حصلت 

```bash
بناء crud كامل للمستخدم
بناء صفحة انشاء حساب 
وتحديث اسم المستخدم بيid 
وحذف مستخدم منid 
```
# V_1.2.3
## the change is build 

```bash
build page login.js
And build page multer.js
```
# V_1.3.3
## change
### add folder controller  & router for post,users in folder router logic alone in controler 

## my potfolio  & cv
 [portfolio](https://agsalem.github.io/portfolio)
## V_1.4.4
## change
```
 add 2 function 
 searchUsers & searchPost
 #
 add admin page
```
## V_1.5.4
## changes
    auth  for token in cookies vierfy token and execute name from token and  
    
    add folder types
      in folder add error.js
      add n&p.js
      add p&c
      add all variable in folder n&p and p&changes
      Notes
      n&p is  shortcut for name & pass
      p&c is  shortcut for post & commint
      n&p added for variable to make code in controller less for folder users
      p&c added for variable to make code in controller less for folder posts


