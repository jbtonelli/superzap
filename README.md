[![en](https://img.shields.io/badge/lang-en-green.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-red.svg)](README.pt.md)

# About the Project

Superzap is a communicator with CRM and helpdesk features that utilizes WhatsApp as a means of communication with clients.

## Original Authorship

This project was initiated in [an Open Source project](https://github.com/canove/whaticket-community), published by the developer [Cassio Santos](https://github.com/canove) under the permissive MIT license. It later received various improvements by unidentified authors and was commercially distributed directly between developers and users with the provision of source code. According to information from [this video, it was leaked and publicly released at some point](https://www.youtube.com/watch?v=SX_cGD5RLkQ).

After some research, it was further identified that the first SaaS version of Whaticket was created by the developer [Wender Teixeira](https://github.com/w3nder), including a version of [Whaticket Single](https://github.com/unkbot/whaticket-free) that uses the Baileys library for WhatsApp access.

It is practically impossible to identify and credit the authors of the improvements. [The code published by the Vem Fazer channel](https://github.com/vemfazer/whaticket-versao-03-12-canal-vem-fazer) does not mention any license; therefore, I am assuming that all authors are comfortable with keeping these changes under the same license as the original project (MIT).

## Relicensing

As I am making these changes and providing them at no cost, I want them to be available to everyone. Therefore, I am choosing to relicense under the AGPL, which requires that every user who has access to the system can obtain the source code.

Therefore, if you directly utilize this version, it is **very important to keep the link on the "About superzap" screen, which provides access to the repository**. If you wish, you can move the link to the source code elsewhere, but it must be easily accessible to any system user.

If you make changes to the code, you must change the link to a repository or another way to obtain the code for your changes.

If you wish to use parts of the code to fix any code **for your own use**, feel free to do so and you don't need to worry about the AGPL license. However, if you want to use any part added in this project in a system that you commercialize, you must either provide the code of your entire system to its users, or you must contact the author of the code to license it under different criteria.

## Objective

The objective of this project is to improve and keep open updates about the published Whaticket SaaS. Mainly focused on application quality and ease of installation and use.

The improvements developed by me will be placed here, and depending on the situation, I can transpose, always crediting, codes and improvements published in other projects also derived from Whaticket Community or Whaticket SaaS.

## Contributing Back

Whenever possible, I intend to backport some adjustments made here to the original projects.

Running the Project:
------------------

The project currently supports execution using Docker containers. For installation, you need to have Docker Community Edition and the Git client installed. It is ideal to find the best way to install these resources on your preferred operating system. [The official Docker installation guide can be found here](https://docs.docker.com/engine/install/).

In both cases, it is necessary to clone the repository, then open a command terminal:

```bash
git -c core.autocrlf=input clone https://github.com/jbtonelli/superzap.git
cd superzap
```

## Running Locally

By default, the configuration is set to run the system only on the local computer. To run it on a local network, you need to edit the `.env-backend-local` and `.env-frontend-local` files and change the backend and frontend addresses from `localhost` to the desired IP, for example, `192.168.0.10`.

To run the system, simply execute the following command:

```bash
docker compose -f docker-compose-local.yaml up -d
```

On the first run, the system will initialize the databases and tables, and after a few minutes, superzap will be accessible through port 3000.

The default username is admin@admin.com, and the default password is 123456.

The application will restart automatically after each server reboot.

Execution can be stopped with the command:

```bash
docker compose -f docker-compose-local.yaml down
```

## Running and Serving on the Internet

Having a server accessible via the internet, it is necessary to adjust two DNS names of your choice, one for the backend and another for the frontend, and also an email address for certificate registration, for example:

* **backend:** api.superzap.example.com
* **frontend:** superzap.example.com
* **email:** superzap@example.com

You need to edit the `.env-backend-acme` and `.env-frontend-acme` files, defining these values in them.

If you want to use reCAPTCHA in the company signup, you also need to insert the secret and site keys in the backend and frontend files, respectively.

This guide assumes that the terminal is open and logged in with a regular user who has permission to use the `sudo` command to execute commands as root.

Being in the project's root folder, execute the following command to start the service:

```bash
sudo docker compose -f docker-compose-acme.yaml up -d
```

On the first run, Docker will compile the code and create the containers, and then superzap will initialize the databases and tables. This operation can take quite some time, after which superzap will be accessible at the provided frontend address.

The default username is admin@admin.com, and the default password is 123456.

The application will restart automatically after each server reboot.

To terminate the service, use the following command:

```bash
sudo docker compose -f docker-compose-acme.yaml down
```

Important Notice
----------------

This project is not affiliated with Meta, WhatsApp, or any other company. The use of the provided code is the sole responsibility of the users and does not imply any liability for the author or project collaborators.

Made Your Life Easier?
----------------------

If this project has helped you with a complex task, consider making a donation to the author via PayPal or Brazilian PIX below.

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=X6XHVCPMRQEL4)

![image](https://github.com/superzap-oss/superzap/assets/6070736/8e85b263-73ca-4fb4-9bdc-03fff356b6ff)

PIX Key: 0699c69d-0951-4686-a5b7-c6cd21aa7e15
