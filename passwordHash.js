import bcrypt from 'bcrypt';

(async () => {
  const password = 'ModernTech@2025';
  const hash = await bcrypt.hash(password, 10);
  console.log('Hashed password:', hash);
})();
