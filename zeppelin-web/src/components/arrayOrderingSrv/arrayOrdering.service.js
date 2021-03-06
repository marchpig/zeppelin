/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function() {

  angular.module('zeppelinWebApp').service('arrayOrderingSrv', arrayOrderingSrv);

  arrayOrderingSrv.$inject = ['TRASH_FOLDER_ID'];

  function arrayOrderingSrv(TRASH_FOLDER_ID) {
    var arrayOrderingSrv = this;

    this.noteListOrdering = function(note) {
      if (note.id === TRASH_FOLDER_ID) {
        return '\uFFFF';
      }
      return arrayOrderingSrv.getNoteName(note);
    };

    this.getNoteName = function(note) {
      if (note.name === undefined || note.name.trim() === '') {
        return 'Note ' + note.id;
      } else {
        return note.name;
      }
    };
  }

})();
