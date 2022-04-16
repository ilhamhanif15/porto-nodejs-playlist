class Controller {

    constructor(service) {
      this.service = service;
      this.getAll = this.getAll.bind(this);
      this.findOne = this.findOne.bind(this);
      this.insert = this.insert.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);
    }
  
    async getAll(req, res) {
      return res.status(200).send(await this.service.getAll(req.query));
    }

    async findOne(req, res) {
        const { id } = req.params;
        return res.status(200).send(await this.service.findOne(id));
    }
  
    async insert(req, res) {
      let response = await this.service.insert(req.body);
      return res.status(response.code).send(response);
    }
  
    async update(req, res) {
      const { id } = req.params;
  
      let response = await this.service.update(id, req.body);
  
      return res.status(response.code).send(response);
    }
  
    async delete(req, res) {
      const { id } = req.params;
  
      let response = await this.service.delete(id);
  
      return res.status(response.code).send(response);
    }
  
  }
  
  export default Controller;