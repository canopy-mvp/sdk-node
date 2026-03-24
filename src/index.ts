export class CanopyClient {
  constructor(private apiKey: string, private baseUrl = 'https://api.canopy.dev') {}

  async getCharge(id: string) {
    const res = await fetch(`${this.baseUrl}/v1/charges/${id}`, {
      headers: { Authorization: `Bearer ${this.apiKey}` },
    });
    return res.json();
  }
}
