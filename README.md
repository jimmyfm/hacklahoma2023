# hacklahoma2023


# Setup

sudo apt-get update
sudo apt-get install mongodb-server -y


ssh -L27017:localhost:27017 ubuntu@<ip>

https://www.mongodb.com/try/download/compass


iptables -A INPUT -p tcp --dport 443 -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT


// Unbuntu LTS is 20.04 so ....
// https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
bash
nvm install 18

 // sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt

git clone https://github.com/jimmyfm/hacklahoma2023.git
cd hacklahoma2023/webapp
npm install
npm run build

cd ../server
npm install
npm start