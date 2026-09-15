(() => {
 const form=document.getElementById('gform_8');if(!form)return;
 const endpoint='/api/submit-brief';
 const requestId=Array.from(crypto.getRandomValues(new Uint8Array(16)),n=>n.toString(16).padStart(2,'0')).join('');
 const button=form.querySelector('[type="submit"]');
 const notice=document.createElement('p');notice.setAttribute('role','status');notice.setAttribute('aria-live','polite');notice.style.cssText='margin-top:20px;white-space:pre-wrap;';button.closest('.gform_footer').append(notice);
 const trap=document.createElement('input');trap.name='company_website';trap.tabIndex=-1;trap.autocomplete='off';trap.setAttribute('aria-hidden','true');trap.style.display='none';form.append(trap);
 const toggle=()=>{const yes=form.querySelector('[name="input_26"]:checked')?.value==='YES';[27,28].forEach(n=>{const field=document.getElementById('field_8_'+n);field.hidden=!yes;field.style.display=yes?'':'none';field.querySelectorAll('input,textarea').forEach(i=>{i.disabled=!yes;i.required=yes&&n===27;});});};
 form.querySelectorAll('[aria-required="true"]').forEach(i=>i.required=true);
 ['26','31','32','33'].forEach(n=>form.querySelectorAll('[name="input_'+n+'"]').forEach(i=>i.required=true));
 const file=form.querySelector('[type="file"]');file.accept='.pdf,.docx,.txt,.jpg,.jpeg,.png,.webp';file.addEventListener('change',()=>file.setCustomValidity(file.files[0]?.size>2097152?'Please choose a file no larger than 2 MB.':''));
 form.addEventListener('change',toggle);toggle();
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(!form.reportValidity()||button.disabled)return;
  if(!/^https?:$/.test(location.protocol)){notice.textContent='Please open this form on your website to submit it.';return;}
  button.disabled=true;notice.textContent='Submitting your brief…';
  try{
   const init=await fetch(endpoint,{credentials:'same-origin',cache:'no-store'});const session=await init.json();
   if(!init.ok||!session.token)throw new Error(session.message||'Unable to start submission.');
   const body=new FormData(form);body.set('csrf_token',session.token);body.set('request_id',requestId);
   const response=await fetch(endpoint,{method:'POST',body,credentials:'same-origin'});const result=await response.json();
   if(!response.ok||!result.ok)throw new Error(result.message||'Submission was not accepted.');
   notice.textContent=result.message;button.textContent='Submitted';
  }catch(error){notice.textContent=error instanceof SyntaxError||error instanceof TypeError?'Submission could not be confirmed. Your answers are still here. Please retry or email info@webdesignspectrum.com.':error.message;button.disabled=false;}
 });
})();
