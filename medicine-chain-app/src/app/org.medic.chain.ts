import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.medic.chain{
   export class Medicine extends Asset {
      id: string;
      owner: User;
      name: string;
   }
   export class User extends Participant {
      id: string;
      name: string;
      type: string;
   }
   export class Transfer extends Transaction {
      medicine: Medicine;
      newOwner: User;
   }
   export class TransferEvent extends Event {
      oldOwner: User;
      newOwner: User;
      medicine: Medicine;
   }
// }
