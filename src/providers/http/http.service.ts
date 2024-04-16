import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {
  constructor(private readonly httpService: HttpService) {}
  token: string =
    'EAAFaOs8JXSUBO516XrpfmVXQZA0WtdykRdoBuZC0dlQJJhwxtIKOvBNwWUQBYEOtMCOlhOM4ZBmUaf6uKEWABTlZCXJmshiFrExJPzeNkZB1lRxks2JnJswZCc4uSvS0ZAvjgQr2WbLjgLZBIDNTPUDFwU7SmuSm4akdrOUdj2B984p7ZB5C3wA1npeJfA3RvneM1lNE9kdNqiGfnEeJA7EZBKjAZBMKNgZD';

  PhoneNumberOne: string = '573008059938';
  PhoneNumberTwo: string = '573008059938';
  PhoneNumberThree: string = '573008059938';
  FirstName: string = 'Jaider Joham';
  LastName: string = 'Morales Franco';
  IdentityDocument: string = '1004597758';
  RH: string = 'O+';
  EPS: string = 'Emsanar';
  Allergies: string = 'N/A';

  public async Category1EmergencyApiWhatsApp(lat: string, lon: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(
          'https://graph.facebook.com/v18.0/277088518820628/messages',
          JSON.stringify({
            messaging_product: 'whatsapp',
            to: this.PhoneNumberOne,
            type: 'template',
            template: {
              name: 'category_1_emergency',
              language: {
                code: 'es',
                policy: 'deterministic',
              },
              components: [
                {
                  type: 'body',
                  parameters: [
                    {
                      type: 'text',
                      text: this.FirstName,
                    },
                    {
                      type: 'text',
                      text: this.LastName,
                    },
                    {
                      type: 'text',
                      text: this.IdentityDocument,
                    },
                    {
                      type: 'text',
                      text: this.RH,
                    },
                    {
                      type: 'text',
                      text: this.EPS,
                    },
                    {
                      type: 'text',
                      text: this.Allergies,
                    },
                    {
                      type: 'text',
                      text:
                        'https://www.google.com/maps/search/?api=1&query=' +
                        lat +
                        ',' +
                        lon +
                        '&zoom=20',
                    },
                  ],
                },
              ],
            },
          }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ` + this.token,
            },
          },
        ),
      );

      console.log('pasa service http');
      return response.data;
    } catch (error) {
      throw new HttpException(error, 400);
    }
  }

  public async emergency_category_1_familyApiWhatsApp(
    lat: string,
    lon: string,
  ) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(
          'https://graph.facebook.com/v18.0/277088518820628/messages',
          JSON.stringify({
            messaging_product: 'whatsapp',
            to: this.PhoneNumberTwo,
            type: 'template',
            template: {
              name: 'emergency_category_1_family',
              language: {
                code: 'es',
                policy: 'deterministic',
              },
              components: [
                {
                  type: 'body',
                  parameters: [
                    {
                      type: 'text',
                      text:
                        'https://www.google.com/maps/search/?api=1&query=' +
                        lat +
                        ',' +
                        lon +
                        '&zoom=20',
                    },
                    {
                      type: 'text',
                      text: this.FirstName,
                    },
                    {
                      type: 'text',
                      text: this.LastName,
                    },
                  ],
                },
              ],
            },
          }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ` + this.token,
            },
          },
        ),
      );

      console.log('pasa service http');
      return response.data;
    } catch (error) {
      throw new HttpException(error, 400);
    }
  }

  public async Category2EmergencyApiWhatsApp(lat: string, lon: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(
          'https://graph.facebook.com/v18.0/277088518820628/messages',
          JSON.stringify({
            messaging_product: 'whatsapp',
            to: this.PhoneNumberTwo,
            type: 'template',
            template: {
              name: 'category_2_emergency',
              language: {
                code: 'es',
                policy: 'deterministic',
              },
              components: [
                {
                  type: 'body',
                  parameters: [
                    {
                      type: 'text',
                      text: this.FirstName,
                    },
                    {
                      type: 'text',
                      text: this.LastName,
                    },
                    {
                      type: 'text',
                      text:
                        'https://www.google.com/maps/search/?api=1&query=' +
                        lat +
                        ',' +
                        lon +
                        '&zoom=20',
                    },
                  ],
                },
              ],
            },
          }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ` + this.token,
            },
          },
        ),
      );

      console.log('pasa service http');
      return response.data;
    } catch (error) {
      throw new HttpException(error, 400);
    }
  }

  public async Category3EmergencyApiWhatsApp(lat: string, lon: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(
          'https://graph.facebook.com/v18.0/277088518820628/messages',
          JSON.stringify({
            messaging_product: 'whatsapp',
            to: this.PhoneNumberThree,
            type: 'template',
            template: {
              name: 'category_3_emergency',
              language: {
                code: 'es',
                policy: 'deterministic',
              },
              components: [
                {
                  type: 'body',
                  parameters: [
                    {
                      type: 'text',
                      text: this.FirstName,
                    },
                    {
                      type: 'text',
                      text: this.LastName,
                    },
                    {
                      type: 'text',
                      text:
                        'https://www.google.com/maps/search/?api=1&query=' +
                        lat +
                        ',' +
                        lon +
                        '&zoom=20',
                    },
                  ],
                },
              ],
            },
          }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ` + this.token,
            },
          },
        ),
      );

      console.log('pasa service http');
      return response.data;
    } catch (error) {
      throw new HttpException(error, 400);
    }
  }
}
