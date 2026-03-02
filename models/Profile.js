class Profile {
    constructor(name, address, phone, email) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    updateProfile(newDetails) {
        this.name = newDetails.name || this.name;
        this.address = newDetails.address || this.address;
        this.phone = newDetails.phone || this.phone;
        this.email = newDetails.email || this.email;
    }

    getProfileInfo() {
        return {
            name: this.name,
            address: this.address,
            phone: this.phone,
            email: this.email
        };
    }
}