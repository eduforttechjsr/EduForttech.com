// Mobile nav toggle
document.getElementById('navToggle').addEventListener('click', function(){
  var nav = document.getElementById('mainNav');
  if(nav.style.display === 'block') nav.style.display = '';
  else nav.style.display = 'block';
});

// Pricing toggle
document.getElementById('regBtn').addEventListener('click', function(){
  document.getElementById('registration').classList.remove('hidden');
  document.getElementById('monthly').classList.add('hidden');
  this.classList.add('active'); document.getElementById('monBtn').classList.remove('active');
});
document.getElementById('monBtn').addEventListener('click', function(){
  document.getElementById('registration').classList.add('hidden');
  document.getElementById('monthly').classList.remove('hidden');
  this.classList.add('active'); document.getElementById('regBtn').classList.remove('active');
});

// contact form (mailto)
function sendMail(e){
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var msg = document.getElementById('message').value;
  var subject = encodeURIComponent('Website inquiry from ' + name);
  var body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\n\\n' + msg);
  window.location.href = 'mailto:eduforttechjsr@gmail.com?subject=' + subject + '&body=' + body;
}