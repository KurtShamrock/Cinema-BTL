import { Admin } from '../models';

const init = async () => {
  if ((await Admin.findAll().count()) === 0) {
    Admin.create({
      fullname: 'Kurt',
      phone: '0123456789',
      password: 'admin',
      email: 'admin@gmail.com',
      address: 'Hanoi',
      avatar: 'https://i.imgur.com/vUqWoEE.png',
    });
    console.log('success!');
  }
};
init();
export { init };
